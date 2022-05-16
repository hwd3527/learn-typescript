class Person2 {
  private name: string; //class 안에서만 쓰겠다.
  public age: number; // 기본적으로 public
  readonly log: string; //읽기만 하고 값은 변경할 수 없다.

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}