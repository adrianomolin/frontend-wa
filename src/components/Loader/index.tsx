import { Overlay } from './styles';

import ReactPortal from '../ReactPortal';

export default function Loader() {

  return (
    <ReactPortal containerId='loader-container'>
      <Overlay>
        <div className="loader" />
      </Overlay>
    </ReactPortal>
  );
}
