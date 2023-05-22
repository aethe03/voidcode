export const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VoidCode</title>
    <style>
      :root {
        --primary-color: mediumslateblue;
      }

      * {
        box-sizing: border-box;
      }

      body {
        height: 100vh;
        display: grid;
        place-items: center;
        background-color: rgb(2, 2, 2);
        margin: 0rem;
        overflow: hidden;
        font-family: "Montserrat", sans-serif;
      }

      h1,
      h2,
      h3,
      p {
        margin: 0rem;
      }

      a {
        color: rgb(255 255 255 / 75%);
        text-decoration: none;
      }

      .card {
        width: 640px;
        position: relative;
        background-color: rgb(16 16 16);
        border: 1px solid rgb(255 255 255 / 5%);
        border-radius: 1.5rem;
        padding: 1rem;
      }

      .card:after {
        content: "";
        height: 70px;
        width: 1px;
        position: absolute;
        left: -1px;
        top: 65%;
        transition: top, opacity;
        transition-duration: 600ms;
        transition-timing-function: ease;
        background: linear-gradient(
          transparent,
          var(--primary-color),
          transparent
        );
        opacity: 0;
      }

      .card:after {
        top: 65%;
        opacity: 0;
      }

      .card:hover:after {
        top: 25%;
        opacity: 1;
      }

      .card-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background-image: radial-gradient(
          rgba(255, 255, 255, 0.1) 1px,
          transparent 1px
        );
        background-position: 50% 50%;
        background-size: 1.1rem 1.1rem;
        padding: 4rem;
        border-radius: 1.25rem;
        overflow: hidden;
      }

      .card-content > :is(h1, h3, p) {
        text-align: center;
      }

      .card-content > h1 {
        color: rgb(250 249 246);
        font-size: 2.6rem;
      }

      .card-content > h3 {
        color: var(--primary-color);
        text-transform: uppercase;
        font-size: 0.76rem;
      }

      .card-content > p {
        color: rgb(255 255 255 / 75%);
        line-height: 1.5rem;
      }

      @media (max-width: 700px) {
        .card {
          width: calc(100% - 2rem);
          margin: 0rem 1rem;
          padding: 0.75rem;
          border-radius: 1rem;
        }
      }

      @media (max-width: 600px) {
        .card-content {
          padding: 3rem;
        }

        .card-content > h1 {
          font-size: 2.2rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="card-content">
        <h3>STOP</h3>
        <h1>The worst thing about coding is the dementors</h1>
        <p>
          This is the server of our app. If you don't know how you got here you
          can go back using <a href="https://youtu.be/dQw4w9WgXcQ">this.</a> If
          you wanna dig deep use
          <a href="/playground">this.</a>
        </p>
      </div>
    </div>
  </body>
</html>
`