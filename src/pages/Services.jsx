
import {Title }from '../components/Title';
import {Text} from '../components/Text';
import {Card }from '../components/Card';

export const Services = () => {
  return (
    <div>
      <Title>Vores Tjenester</Title>
      <Card title="Toast-Notifikationer">
        <Text>
          Vi tilbyder udvikling og integration af toast-notifikationer til dine webapplikationer for at forbedre brugerinteraktionen.
        </Text>
      </Card>
      <Card title="UI/UX Design">
        <Text>
          Forbedring af brugeroplevelsen gennem moderne og attraktive designkomponenter.
        </Text>
      </Card>
      <Card title="Fuld Support">
        <Text>
          Vi hjælper med at integrere og optimere toast-notifikationer til forskellige platforme.
        </Text>
      </Card>
    </div>
  );
};


