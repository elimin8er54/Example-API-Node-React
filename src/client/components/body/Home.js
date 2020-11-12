import React from "react";
import "../../App.css";

function Home() {
  return (
    <div className="home">
      <h2>
        <b>
          This is a very basic example using React/Express/Nodejs/JWT/MySQL.
        </b>
      </h2>
      <p>
        Since this is a SPA we update certain parts of the website when browsing
        instead of reloading the whole page everytime.
      </p>
      <p>
        Using this method makes moving from one page to another feels more
        natural.
      </p>
      <p>
        This API/Server dosn't have any autherization or limits on queries per
        minute. It's made just as a basic example.
      </p>
      <p>
        <span id = "git-text" >Github:</span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/elimin8er54/myexample"
        >
          https://github.com/elimin8er54/myexample
        </a>
      </p>
    </div>
  );
}

export default Home;
