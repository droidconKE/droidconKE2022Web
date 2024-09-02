import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            id="font-awesome-css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat%3A100%2C300%2C400%2C500%2C600%2C700%2C900&amp;display=swap&amp;ver=6.0"
            id="montserrat-font"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Rubik%3A100%2C300%2C500%2C700%2C900&amp;display=swap&amp;ver=6.0"
            id="rubik-font"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/images/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/images/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/images/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/images/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/images/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/images/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#FF6E4D" />
          <meta
            name="msapplication-TileImage"
            content="/images/icons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#FF6E4D" />

          {/* SEO Headers */}
          <meta
            name="description"
            content="Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a forum for developers to network with other developers, share techniques, announce apps &products, learn, and teach."
          />
          <meta
            name="keywords"
            content="Android, Event,  Conference, Meetup, droidCon, Kenya, KE, droidConKE, droidconke, Android254, Kotlin, Flutter, iOS, droidcon, droidcon africa, africa, android, 254 tech"
          />
          <meta name="author" content="droidconKe" />

          {/* <!-- twitter card starts from here, if you don't need remove this section --> */}
          {/* <meta name="twitter:card" content="summary"/> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@droidconke" />
          <meta name="twitter:creator" content="@droidconke" />
          <meta name="twitter:url" content="https://droidcon.co.ke" />
          <meta name="twitter:title" content="droidconKe" />
          {/* <!-- maximum 140 char --> */}
          <meta
            name="twitter:description"
            content="Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a forum for developers to network with other developers, share techniques, announce apps &products, learn, and teach."
          />
          {/* <!-- maximum 140 char --> */}
          <meta
            name="twitter:image"
            content="https://droidcon.co.ke/images/droidcon-24-kenya-announcement.png"
          />
          <meta name="twitter:image:alt" content="droidcon logo" />
          {/* <!-- when you post this page url in twitter , this image will be shown -->
	<!-- twitter card ends from here --> */}

          {/* <!-- facebook open graph starts from here, if you don't need then delete open graph related  --> */}
          <meta property="og:title" content="droidconKe" />
          <meta property="og:url" content="https://droidcon.co.ke/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="droidconKe" />
          {/* <!--meta property="fb:admins" content="" /-->  <!-- use this if you have  --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://droidcon.co.ke/images/droidcon-24-kenya-announcement.png"
          />
          <meta
            property="og:description"
            content="Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a forum for developers to network with other developers, share techniques, announce apps &products, learn, and teach."
          />
          {/* <!-- when you post this page url in facebook , this image will be shown -->
	<!-- facebook open graph ends from here --></meta> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
