import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import book1 from 'D:/ksj/react/hostel-management/src/book1.jpg';
import book2 from 'D:/ksj/react/hostel-management/src/book2.jpg';
import book3 from 'D:/ksj/react/hostel-management/src/book3.jpg';
function Mycard() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="D:/ksj/react/hostel-management/src/book1.jpg" src={book1} />
        <Card.Body>
          <Card.Title>BIOGRAPHY</Card.Title>
          <Card.Text>
          An Indian entrepreneur, photographer, and motivational speaker, Sandeep Maheshwari is a renowned name among youngsters. He is also the founder and CEO of Imagesbazaar.com, the largest collection of Indian stock images that have made him one of the fastest-growing entrepreneurs in India.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={book2} />
        <Card.Body>
          <Card.Title>BIOGRAPHY</Card.Title>
          <Card.Text>
          Sonu Anand Sharma (born 8 March 1975) is a former Indian deaf badminton player. She has represented India at the Deaflympics twice in 1997 and in 2009. She is married to Mr. Somesh Sharma, who is a national level cricketer and having two kids Somya Sharma and Saksham Sharma. Sonu Anand Sharma
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={book3}/>
        <Card.Body>
          <Card.Title>BIOGRAPHY</Card.Title>
          <Card.Text>
          Brown was born with his twin brother, Wesley, in Liberty City, a low-income section of Miami, Florida. He was adopted by Mamie Brown, a 38-year-old single woman who worked as a cafeteria attendant and domestic assistant.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Mycard;