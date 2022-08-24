module.exports = {
    'env': {
        'browser': true,
        'es6': true,
    },
    'extends': [
        'plugin:react/recommended',
        'google',
    ],
    'overrides': [],
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
    ],
    'rules': {
        'no-tabs': 'off',
        'indent': [
            'warn',
            'tab',
            //强制统一缩进
        ],
        'comma-dangle': 0,
        'no-trailing-spaces': 0,
        'eol-last': 0,
        'linebreak-style': [
            'error',
            'windows'
            //Windows的行结尾方式
        ],
        'quotes': [
            'warn',
            'single'
            //单引号
        ],
        'semi': [
            'warn',
			'never'
            //不加分号
        ],
        'max-len': ["error", {code: 300}]
    },
};
