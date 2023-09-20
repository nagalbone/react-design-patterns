import Modal from "./Modal";
import NumberedList from "./NumberedList";
import RegularList from "./RegularList";
import LargePersoneListItem from "./people/LargePersoneListItem";
import SmallPersoneListIte from "./people/SmallPersoneListIte";

function App() {
  const people = [
    {
      name:'person1',
      age:29,
      hairColor:'grey'
    },
    {
      name:'person name 2',
      age:31,
      hairColor:'silver'
    }
  ]

  return (
    <>
    {/* <RegularList items={people} resourceName ='person' itemComponent={SmallPersoneListIte} />
    <NumberedList items={people} resourceName='person' itemComponent={LargePersoneListItem} /> */}
    <Modal>
      <LargePersoneListItem person={people[0]} />
    </Modal>
    </>
  );
}

export default App;
