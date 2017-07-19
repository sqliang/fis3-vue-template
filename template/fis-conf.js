/**
 * @file fis-conf
 */

const path = require('path');


let modCache = process.env.CACHE;
let debug = process.env.DEBUG;

// MOD_CACHE, whether enable mod.js localStorage cache
if (modCache === 'false') {
    modCache = false;
}
else {
    modCache = true;
}

// DEBUG, whether enable console & vConsole
if (debug === 'true') {
    debug = true;
}
else {
    debug = false;
}

// 配置命名空间
fis.set('namespace','fis-vue-mis');


// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);


fis.set('project.files', ['client/**']);
fis.set(
    'project.ignore',
    fis.get('project.ignore').concat([
        '**.md',
        '**.json',
        'DS_store'
    ])
);
fis.set('project.md5Length', 8);
fis.set('project.fileType.text', 'vue');

// 模块化支持插件
// https://github.com/fex-team/fis3-hook-commonjs (forwardDeclaration: true)
fis.hook('commonjs', {
    baseUrl: './client',
    extList: ['.js', '.vue'],
    paths: {
        'vue': '/node_modules/vue/dist/vue.js'
    }
});

// 禁用components,启用node_modules
fis.unhook('components');
fis.hook('node_modules');

fis.match('/node_modules/**.js', {
    isMod: true,
    useSameNameRequire: false
});

fis.match('/client/app.js', {
    isMod: true,
    rExt: 'js',
    parser: [
        fis.plugin('babel-6.x', {
            // presets: ['es2015-loose', 'stage-3']
        }),
        fis.plugin('translate-es3ify', null, 'append')
    ],
    preprocessor: [
        fis.plugin('js-require-css'),
        fis.plugin('js-require-file', {
            useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64
        })
    ]
});

fis.match('/client/static/**.js', {
    isMod: false
});

fis.match('/client/(**).vue', {
    isMod: true,
    rExt: '.js',
    parser: [
        fis.plugin('vue-component', {
            // vue@2.x runtimeOnly
            runtimeOnly: true,          // vue@2.x 有润timeOnly模式，为ture时，template会在构建时转为render方法
            // styleNameJoin
            styleNameJoin: '',          // 样式文件命名连接符 `component-xx-a.css`
            extractCSS: true,           // 是否将css生成新的文件, 如果为false, 则会内联到js中
            // css scoped
            cssScopedIdPrefix: '_v-',   // hash前缀：_v-23j232jj
            cssScopedHashType: 'sum',   // hash生成模式，num：使用`hash-sum`, md5: 使用`fis.util.md5`
            cssScopedHashLength: 8,     // hash 长度，cssScopedHashType为md5时有效
            cssScopedFlag: '__vuec__',  // 兼容旧的ccs scoped模式而存在，此例子会将组件中所有的`__vuec__`替换为 `scoped id`，不需要设为空
        })
    ]
});

fis.match('/client/**.{css,vue:css,vue:stylus}', {
    rExt: 'css',
    parser: fis.plugin('stylus'),
    postprocessor: fis.plugin('autoprefixer'),
    useSprite: true
});

fis.match('/client/{components,pages,runtimes}/**.{js,vue:js}', {
    isMod: true,
    rExt: 'js',
    parser: [
        fis.plugin('babel-6.x', {
            // presets: ['es2015-loose', 'stage-3']
        }),
        fis.plugin('translate-es3ify', null, 'append')
    ],
    preprocessor: [
        fis.plugin('js-require-css'),
        fis.plugin('js-require-file', {
            useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64
        })
    ]
});

const dev = fis.media('dev');

dev.match('/client/index.html', {
    release: '/${namespace}/index.html'
});
dev.match('/client/{components,pages,runtimes,static}/(**)', {
    release: '/${namespace}/$0'
});
dev.match('/client/app.js', {
    release: '/${namespace}/$0'
});
dev.match('/(node_modules/**)', {
    release: '/${namespace}/$0'
});
dev.match('/node_modules/**.map', {
    release: false
});

dev.match('/client/**{vue:html}', {
    release: false,
    optimizer: fis.plugin('dfy-html-minifier', {
        removeComments: true,
        collapseWhitespace: true
    })
});

dev.match('::package', {
    // 开启 css sprite
    spriter: fis.plugin('csssprites', {
        // 图之间的边距
        margin: 10,
        // 使用矩阵排列方式，默认为线性`linear`
        layout: 'matrix'
    }),
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        resourcemapWhitespace: 0,
        useInlineMap: true // 资源映射表内嵌
    })
});

// otp环境测试部署
const otp = fis.media('otp');
let packages = require('./config.json').join(',');
let receiver = 'http://sqliang.baike.otp.baidu.com/receiver.php';


otp.match('/(node_modules/{' + packages + '}/**.js)', {
    packTo: '/static/${namespace}/js/libs.js'
});

otp.match('/client/app.js', {
    packTo: '/static/${namespace}/js/init.js'
});
otp.match('/client/runtimes/**.{js,vue}', {
    packTo: '/static/${namespace}/js/init.js'
});

otp.match('/client/components/**.{js,vue}', {
    packTo: '/static/${namespace}/js/components/components-pack.js'
});

otp.match('/client/pages/(*)/**.{js,vue}', {
    packTo: '/static/${namespace}/js/pages/$1-pack.js'
});

otp.match('/client/static/js/mod.js', {
    packTo: '/static/${namespace}/js/mod.js'
});
otp.match('/{client,node_modules}/**.{css,vue:css,vue:stylus}', {
    packTo: '/static/${namespace}/css/styles.css',
    optimizer: fis.plugin('dfy-html-minifier', {
        removeComments: true,
        collapseWhitespace: true
    })
})
;
otp.match('*.{jpg,jpeg,gif,png,woff}', {
    release: '/static/${namespace}/imgs/$0',
    deploy: [
        fis.plugin('http-push', {
            receiver: receiver,
            to: '/home/work/orp/webroot'
        })
    ]

});

otp.match('::text', {
    useHash: true
});
otp.match('::image', {
    useHash: true
});

otp.match('/client/**{vue:html}', {
    release: false,
    optimizer: fis.plugin('dfy-html-minifier', {
        removeComments: true,
        collapseWhitespace: true
    })
});

otp.match('/client/index.html', {
    rExt: '.tpl',
    useHash: false,
    release: '/${namespace}/index.tpl',
    deploy: [
        fis.plugin('http-push', {
            receiver: receiver,
            to: '/home/work/orp/template'
        })
    ]
});

// optimize
otp.match('/{client,node_modules}/**.{js,vue}', {
    optimizer: fis.plugin('uglify-js', {
        compress: {
            'warnings': false,
            'drop_console': !debug,
            'dead_code': true,
            'global_defs': {
                '__MOD_CACHE': modCache,
                '__DEBUG': debug
            }
        },
        output: {
            'ascii_only': true
        },
        comments: false,
        mangle: true
    })
});


otp.match('::package', {
    // 开启 css sprite
    spriter: fis.plugin('csssprites', {
        // 图之间的边距
        margin: 10,
        // 使用矩阵排列方式，默认为线性`linear`
        layout: 'matrix'
    }),
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        resourcemapWhitespace: 0,
        useInlineMap: true // 资源映射表内嵌
    })
});

otp.match('/static/**', {
    deploy: [
        fis.plugin('http-push', {
            receiver: receiver,
            to: '/home/work/orp/webroot'
        })
    ]
});

// prod部署
const prod = fis.media('prod');
var npmPackages = require('./config.json').join(',');

prod.match('/(node_modules/{' + npmPackages + '}/**.js)', {
    packTo: '/static/${namespace}/js/libs.js'
});

prod.match('/client/app.js', {
    packTo: '/static/${namespace}/js/init.js'
});
prod.match('/client/runtimes/**.{js,vue}', {
    packTo: '/static/${namespace}/js/init.js'
});

prod.match('/client/components/**.{js,vue}', {
    packTo: '/static/${namespace}/js/components/components-pack.js'
});

prod.match('/client/pages/(*)/**.{js,vue}', {
    packTo: '/static/${namespace}/js/pages/$1-pack.js'
});
prod.match('/client/static/js/mod.js', {
    packTo: '/static/${namespace}/js/mod.js'
});

prod.match('*.{jpg,jpeg,gif,png,woff}', {
    release: '/static/${namespace}/imgs/$0',
    deploy: [
        fis.plugin('local-deliver', {
            to: './output'
        })
    ]

});

prod.match('::text', {
    useHash: true
});
prod.match('::image', {
    useHash: true
});

prod.match('/client/**{vue:html}', {
    release: false,
    optimizer: fis.plugin('dfy-html-minifier', {
        removeComments: true,
        collapseWhitespace: true
    })
});

// optimize
prod.match('/{client,node_modules}/**.{js,vue}', {
    optimizer: fis.plugin('uglify-js', {
        compress: {
            'warnings': false,
            'drop_console': !debug,
            'dead_code': true,
            'global_defs': {
                '__MOD_CACHE': modCache,
                '__DEBUG': debug
            }
        },
        output: {
            'ascii_only': true
        },
        comments: false,
        mangle: true
    })
});
prod.match('/{client,node_modules}/**.{css,vue:css,vue:stylus}', {
    packTo: '/static/${namespace}/css/styles.css',
    optimizer: fis.plugin('dfy-html-minifier', {
        removeComments: true,
        collapseWhitespace: true
    })
});
prod.match('::package', {
    // 开启 css sprite
    spriter: fis.plugin('csssprites', {
        // 图之间的边距
        margin: 10,
        // 使用矩阵排列方式，默认为线性`linear`
        layout: 'matrix'
    }),
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        resourcemapWhitespace: 0,
        useInlineMap: true // 资源映射表内嵌
    })
});

prod.match('/static/**', {
    deploy: [
        fis.plugin('local-deliver', {
            to: './output'
        })
    ]
});
prod.match('/client/index.html', {
    useHash: false,
    release: '/template/${namespace}/index.html',
    deploy: [
        fis.plugin('local-deliver', {
            to: './output'
        })
    ]
});


