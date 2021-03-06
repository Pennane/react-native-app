const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        textInverted: '#fff',
        primary: '#0366d6',
        appBarBackground: '#24292e',
        mainBackground: '#e1e4e8',
        itemBackground: '#fff'
    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    fonts: {
        main: Platform.select({
            android: 'Robot',
            ios: 'Arial',
            default: 'System'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    }
}

export default theme
