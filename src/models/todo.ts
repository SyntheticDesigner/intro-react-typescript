//interface is an alternative to type or class
class Todo {
  id: string;
  text: string;
  //define the types before making the constructor
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
//YOU CAN USE YOUR CLASS NAME AS A TYPE
export default Todo;
