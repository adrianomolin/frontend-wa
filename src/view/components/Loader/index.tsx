import { Overlay } from './styles';

import ReactPortal from '../ReactPortal';
import Spinner from '../Spinner';

interface LoaderProps {
  isLoading?: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId='loader-container'>
      <Overlay>
        <Spinner />
      </Overlay>
    </ReactPortal>
  );
}
