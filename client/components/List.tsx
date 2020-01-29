import * as React from 'react';

export default function List(props: any) {
  return (
    <section>
      {props.items.map((item) => (
        <div>
          {item.id}
        </div>
      ))}
    </section>
  );
};
