import Card from '../components/UI/Card';

export default function HomePage() {
  return (
    <div className='container'>
      <h1>HomePage</h1>
      <Card name={'This is cards name'} arr={['one', 'two', 'three']} count={50} />
      <Card name={'other card'} count={50} />
      <button className='btn'>Read more</button>
    </div>
  );
}
