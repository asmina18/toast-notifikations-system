
import { Title } from '../components/Title';
import { Text } from '../components/Text';
import { Card } from '../components/Card';
import{ToastButton} from '../components/ToastButton';



export  const Hjem = () => {
  return (
    <>
     <div>
      <Title> Velkommen til vores hjemmeside!</Title>
      <Text>
        Dette er en eksempeltekst for at vise toast-notifikationer.
      </Text>
      <Card title ="Hvad er Toast-Notifikationer?">
      <Text>
          Toast-notifikationer bruges til at informere brugeren om en handling, der er udført, såsom succes, fejl eller advarsel.
        </Text>
      </Card>
      <div  style={{ marginTop: '20px' }}>
        <ToastButton/>
      </div>
    </div>
  
    </>
   
    
  );
};


