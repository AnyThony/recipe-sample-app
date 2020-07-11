import React from 'react';
import { bookmarkOutline, bookmark } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
interface ContainerProps {
  clicked(): void;
  enabled: boolean;
}

const SaveButton: React.FC<ContainerProps> = ({ enabled, clicked }) => {
  return (
    <div onClick={clicked} className="btn-save">
      <IonIcon icon={enabled ? bookmarkOutline : bookmark} />
    </div>
  );
};

export default SaveButton;
