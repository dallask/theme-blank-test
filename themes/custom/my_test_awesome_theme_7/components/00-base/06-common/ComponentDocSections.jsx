import React from 'react';

import './_docs.scss';

export function Parent(props) {
  if (props.text) {
    return (
      <p className="docs-p">
        {props.text}
      </p>
    );
  }

  return (
    <p className="docs-p">
      Has no parents. The paragraph can be used as a parent itself.
    </p>
  );
}

export function Templates(props) {
  if (props.text) {
    return (
      <p className="docs-p">
        <code>
          {`[theme_name]/templates/${props.text}`}
        </code>
      </p>
    );
  }

  return (
    <p className="docs-p">
      Has no templates
    </p>
  );
}

export function Libraries(props) {
  if (props.libraries) {
    return (
      <ul className="docs-ul">
        {props.libraries.map(library => {
          return (
            <li key={library}>
              {library}
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <p className="docs-p">
      The paragraph has no libraries.
    </p>
  );
}

export function Behaviors(props) {
  if (props.behaviors) {
    return (
      <ul className="docs-ul">
        {props.behaviors.map(behavior => {
          return (
            <li key={behavior}>
              {behavior}
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <p className="docs-p">
      The paragraph has no behaviors.
    </p>
  );
}

export function Code(props) {
  if (props.text) {
    return (
      <pre className="prismjs">
        <code>
          {props.text}
        </code>
      </pre>
    );
  }

  return (
    <p className="docs-p">
      No data.
    </p>
  );
}
