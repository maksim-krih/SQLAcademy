import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

interface IProps {
  history: any;
  children?: any;
}

const ScrollToTop = withRouter((props: IProps) => {
  const { history, children } = props;

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return <Fragment>{children}</Fragment>;
})

export default ScrollToTop;