export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span> Hello Coder, </span>
            Welcome <a>Battleground of Java 👋</a>
          </h1>
        </div>

        <div id="hero" className="rounded">
          <div className="text-container">
            <h2>
              <svg
                fill="none"
                stroke="#03CEA4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span>Resources are recently updated...</span>
            </h2>
            <a href="#commands"> What&apos;s new? </a>
          </div>
          <div className="logo-container">
            <svg
              fill="#345995"
              role="img"
              viewBox="-40 -20 600 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
        d="M445.416 294.913c-11.111 101.111 5.743 209.25-189.416 209.25S77.694 396.024 66.582 294.913C44.36 92.693 82.391 7.837 255.991 7.837c173.617 0 211.648 84.856 189.425 287.076z"
        fill="#362928"
      />
      <path
        d="M85.913 294.913C64.109 96.508 100.324 11.091 265.657 7.938c-3.18-.061-6.391-.101-9.665-.101-173.601 0-211.633 84.856-189.41 287.076 11.111 101.111-5.742 209.25 189.417 209.25 3.283 0 6.501-.033 9.665-.094C80.736 500.525 96.837 394.323 85.913 294.913z"
        fill="#2e2322"
      />
      <path
        d="M373.541 222.321H138.458c-16.203 0-29.339 13.116-29.339 29.295v31.626c0 26.407 21.438 47.813 47.885 47.813h197.991c26.446 0 47.885-21.407 47.885-47.813v-31.626c0-16.18-13.136-29.295-29.339-29.295z"
        fill="#ffe8d1"
      />
      <path
        d="M127.927 283.24v-31.626c0-16.179 13.135-29.295 29.339-29.295h-18.808c-16.203 0-29.339 13.116-29.339 29.295v31.626c0 26.407 21.438 47.814 47.885 47.814h18.808c-26.446 0-47.885-21.407-47.885-47.814z"
        fill="#ebc7a4"
      />
      <path
        d="M457.665 189.502H54.334a4.18 4.18 0 01-4.18-4.18v-59.348a4.18 4.18 0 014.18-4.18h403.331a4.18 4.18 0 014.18 4.18v59.348a4.181 4.181 0 01-4.18 4.18z"
        fill="#f75534"
      />
      <path d="M50.155 121.793h18.808V189.5H50.155z" fill="#bd391e" />
      <path
        d="M320.095 200.4h-128.19c-6.568 0-11.893-5.325-11.893-11.893v-65.718c0-6.568 5.325-11.893 11.893-11.893h128.189c6.568 0 11.893 5.325 11.893 11.893v65.718c.001 6.569-5.324 11.893-11.892 11.893z"
        fill="#d6d6d6"
      />
      <path
        d="M198.82 188.507v-65.718c0-6.568 5.325-11.893 11.893-11.893h-18.808c-6.568 0-11.893 5.325-11.893 11.893v65.718c0 6.568 5.325 11.893 11.893 11.893h18.808c-6.569.001-11.893-5.325-11.893-11.893z"
        fill="#b3b3b3"
      />
      <path d="M226.612 180.726a7.837 7.837 0 01-7.837-7.837v-34.482a7.837 7.837 0 017.837-7.837 7.837 7.837 0 017.837 7.837v34.482a7.837 7.837 0 01-7.837 7.837zM285.387 180.726a7.836 7.836 0 01-7.837-7.837v-34.482a7.836 7.836 0 017.837-7.837 7.836 7.836 0 017.837 7.837v34.482a7.836 7.836 0 01-7.837 7.837zM255.999 180.726a7.837 7.837 0 01-7.837-7.837v-34.482a7.837 7.837 0 017.837-7.837 7.836 7.836 0 017.837 7.837v34.482a7.836 7.836 0 01-7.837 7.837zM211.884 265.595c-.132.025-13.304 2.627-28.43-.038-12.128-2.136-20.939-10.361-21.169-10.579a7.838 7.838 0 00-10.899 11.264c.492.478 12.251 11.738 29.349 14.751 6.084 1.071 11.89 1.429 16.939 1.429 9.899 0 16.886-1.379 17.318-1.467a7.836 7.836 0 006.126-9.236 7.832 7.832 0 00-9.234-6.124zM297.005 280.956c.434.088 7.419 1.467 17.318 1.467 5.049 0 10.857-.358 16.939-1.429 17.098-3.012 28.857-14.273 29.349-14.751a7.835 7.835 0 00.163-11.081 7.834 7.834 0 00-11.081-.163c-.086.084-8.94 8.409-21.149 10.559-14.983 2.643-28.312.062-28.429.038a7.831 7.831 0 00-9.236 6.125 7.837 7.837 0 006.126 9.235z" />
      <path d="M457.665 113.957h-8.875c-3.176-11.426-7.155-21.994-11.871-31.472a7.834 7.834 0 00-10.508-3.525 7.836 7.836 0 00-3.525 10.507c3.697 7.429 6.905 15.639 9.589 24.49H363.14l16.002-72.474c7.554 4.595 14.352 9.818 20.431 15.704a7.835 7.835 0 0011.081-.18 7.836 7.836 0 00-.18-11.081C378.11 14.593 329.023 0 255.989 0 198.397 0 155.21 9.345 123.957 28.569c-30.014 18.46-49.928 46.437-60.766 85.388h-8.857c-6.626 0-12.016 5.391-12.016 12.016v59.351c0 6.187 4.701 11.294 10.719 11.943-.307 28.211 1.58 60.531 5.754 98.503 1.262 11.476 2.178 23.262 3.063 34.658 1.586 20.433 3.236 41.545 6.934 61.171.044.605.157 1.198.335 1.771 7.582 38.631 22.661 65.421 47.415 84.245C146.967 500.753 192.586 512 255.999 512s109.033-11.247 139.461-34.384c24.756-18.823 39.834-45.614 47.414-84.245a7.786 7.786 0 00.335-1.77c3.698-19.623 5.348-40.733 6.934-61.164.886-11.4 1.801-23.187 3.065-34.669 4.176-37.983 6.059-70.303 5.745-98.5 6.022-.646 10.728-5.755 10.728-11.945v-59.349c0-6.627-5.391-12.017-12.016-12.017zm-3.657 67.709H339.824V129.63h13.492c.025 0 .05.004.075.004.016 0 .031-.004.047-.004h89.286l.024.002.033-.002h11.225v52.036zm-266.16 6.841v-65.718a4.06 4.06 0 014.056-4.056h128.19a4.06 4.06 0 014.056 4.056v65.718a4.06 4.06 0 01-4.056 4.056h-128.19a4.06 4.06 0 01-4.056-4.056zM364.761 33.918l-17.672 80.038h-9.378c-3.249-6.45-9.915-10.896-17.616-10.896h-128.19c-7.701 0-14.368 4.446-17.616 10.896h-9.249l-17.662-79.989c27.56-12.477 63.293-18.294 108.612-18.294 45.892 0 81.475 5.896 108.771 18.245zM57.991 129.63h11.205l.033.002.024-.002h31.505c4.328 0 7.837-3.508 7.837-7.837s-3.509-7.837-7.837-7.837H79.51c9.917-32.634 27.172-56.432 53.486-72.427l15.992 72.427h-10.613c-4.328 0-7.837 3.508-7.837 7.837s3.509 7.837 7.837 7.837h20.314c.016 0 .031.004.047.004.025 0 .05-.004.074-.004h13.364v52.037H57.991V129.63zm198.008 366.697c-130.903 0-160.167-49.874-171.195-104.432 13.015-28.692 36.706-51.261 46.118-59.495a55.425 55.425 0 0026.082 6.493h35.605c4.328 0 7.837-3.508 7.837-7.837s-3.509-7.837-7.837-7.837h-35.605c-22.082 0-40.048-17.934-40.048-39.977v-31.626c0-11.831 9.645-21.458 21.502-21.458h235.083c11.856 0 21.502 9.627 21.502 21.458v31.626c0 22.043-17.965 39.977-40.048 39.977H234.404c-4.328 0-7.837 3.508-7.837 7.837s3.509 7.837 7.837 7.837h120.592a55.42 55.42 0 0026.087-6.496c9.403 8.213 33.063 30.724 46.111 59.5-11.028 54.558-40.293 104.43-171.195 104.43zm181.63-202.272c-1.29 11.73-2.216 23.645-3.112 35.168-.996 12.817-1.964 25.197-3.373 37.182-12.7-20.039-28.169-35.431-37.116-43.5 10.29-10.102 16.688-24.149 16.688-39.664v-31.626c0-20.475-16.677-37.131-37.175-37.131H138.458c-20.499 0-37.175 16.657-37.175 37.131v31.626c0 15.516 6.397 29.562 16.687 39.664-8.946 8.07-24.416 23.461-37.116 43.5-1.409-11.989-2.378-24.372-3.374-37.191-.894-11.52-1.819-23.433-3.11-35.158-4.111-37.39-5.966-69.121-5.66-96.717h105.578c3.248 6.451 9.915 10.897 17.617 10.897h128.19c7.701 0 14.368-4.446 17.617-10.897h105.569c.312 27.582-1.539 59.313-5.652 96.716z" />
            </svg>
          </div>
        </div>

        <div id="middle-content">
          <div id="learning-materials" className="rounded shadow">
            <h2>Learning Resources</h2>
            <a
              href="https://battleofjava.github.io/resources/"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>
                Lectures
                <span> Everything is in there. </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span>
                Blog
                <span> Updates, examples & features </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
           
            <a
              href="https://nx.dev/react-tutorial/01-create-application?utm_source=nx-project"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span>
                Interactive tutorials
                <span> Create an app, step-by-step </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>
                YouTube channels & playlists
                <span> Nx Show, talks & tutorials </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <span>
                User guide
                <span> Nx custom courses </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div id="other-links">
            <a
              id="nx-console"
              className="button-pill rounded shadow"
              href="https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console&utm_source=nx-project"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Visual Studio Code</title>
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
              </svg>
              <span>
                Install Ide with Jvm  
                <span>Running files & projects</span>
              </span>
            </a>
            <div id="nx-cloud" className="rounded shadow">
              <div>
                <svg
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z"
                    fill="#0E2039"
                  />
                  <path
                    d="M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z"
                    fill="white"
                  />
                </svg>
                <h2>
                  NxCloud
                  <span>Enable faster CI & better DX</span>
                </h2>
              </div>
              <p>
                You can activate distributed tasks executions and caching by
                running:
              </p>
              <pre>nx connect-to-nx-cloud</pre>
              <a
                href="https://nx.app/?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                What is Nx Cloud?{' '}
              </a>
            </div>
            <a
              id="nx-repo"
              className="button-pill rounded shadow"
              href="https://github.com/nrwl/nx?utm_source=nx-project"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>
                Nx is open source
                <span> Love Nx? Give us a star! </span>
              </span>
            </a>
          </div>
        </div>

        <div id="commands" className="rounded shadow">
          <h2>Next steps</h2>
          <p>Here are some things you can do with Nx:</p>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Add UI library
            </summary>
            <pre>
              <span># Generate UI lib</span>
              nx g @nrwl/next:library ui
              <span># Add a component</span>
              nx g @nrwl/next:component button --project=ui
            </pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              View interactive project graph
            </summary>
            <pre>nx graph</pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Run affected commands
            </summary>
            <pre>
              <span># see what&apos;s been affected by changes</span>
              nx affected:graph
              <span># run tests for current changes</span>
              nx affected:test
              <span># run e2e tests for current changes</span>
              nx affected:e2e
            </pre>
          </details>
        </div>

        <p id="love">
          BattleofJava
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default Index;
