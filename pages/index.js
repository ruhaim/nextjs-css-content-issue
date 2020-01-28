import React from "react";
import Link from "next/link";
import css from "../style/a.scss";

export default () => (
  <ul>
    <li>
      <div className="a">a</div>
    </li>
    <li>
      <div className="b">b</div>
    </li>
    <li>
      <div className="c">c</div>
    </li>
    <li>
      <div className="d">d</div>
    </li>
    <li>
      <div className="e">e</div>
    </li>
    {/* <style jsx>`
      .export::before {
        content: '\f254'; --> // This work too
      }
    `</style> */}
    <style jsx>{css}</style>
  </ul>
);
