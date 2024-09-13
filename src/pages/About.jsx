
import {Title} from '../components/Title';
import {Text} from '../components/Text';
import {Card} from '../components/Card';

export const About = () => {
  return (
    <div>
      <Title>Om Os</Title>
      <Text>
        Vi er et team af udviklere dedikeret til at forbedre brugeroplevelsen gennem moderne og intuitive komponenter som toast-notifikationer.
      </Text>
      <Card title="Vores Mission">
        <Text>
          At sikre hurtig og præcis feedback til brugerne gennem innovative løsninger og moderne designkomponenter.
        </Text>
      </Card>
    </div>
  );
};


