import React, { useState } from 'react';

const Filters = ({ product }) => {
  const [firstFilers, setFirstFilter] = useState(true);

  const firstFiler = [];

  const doFilter = e => {
    setFirstFilter(firstFilers => !firstFilers);
    if (firstFilers) {
      firstFiler.push(e.target.value);
      console.log(firstFiler.join());
    } else {
      firstFiler.filter(text => text !== e.target.value);
    }
    console.log(firstFiler);
  };
  return (
    <div className="filter10">
      <input type="checkbox" value={product.Korea} onClick={doFilter} />
      <div>asd</div>
    </div>
  );
};

export default Filters;
