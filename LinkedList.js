class node {
    constructor(data){
        this.data = data
        this.next = null

    }
}

class linkedlist {
    constructor(){
        this.head = null
    }

    InsertarFinal(data){
        const newNode = new node(data)

        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head
            while (current.next !== null) {
                current = current.next;
              }
              current.next = newNode;
        }
    }

    Mostrar(){
        let current = this.head
        let espacio = ''

        while(current !== null){ 
          espacio += current.data + "->"
        current = current.next
        }
        console.log(espacio+ "Null");
    }

    InsertarInicio(data){
        
        const newNode = new node(data)
        let current = this.head  
        newNode.next = current
        this.head = newNode
    
    }

    InsertarEnPosicion(data, position){

        if (position < 0){
            
             console.log("Posicion no valida");
             return;
        }


        if (position === 0){
            const newNode = new node(data)

            newNode.next = this.head
          this.head = newNode
          return;
        }

        let current = this.head;
        let index = 0;

        while(current.next !== null && index < position - 1){
            current = current.next
            index++
        }
      
        if (current === null) {
            console.log("Posición fuera de rango");
            return;
          }


          newNode.next = current.next;
          current.next = newNode;

    }
    EliminarPorValor(DataE){

        //Confirmando la existencia del mismo en la linked list 9 --> (No lo hciiste pero si se debio de hacer)
        //Podria recorrer todo el sistema del head and next viendo si es el valor cuando pare el current lo remove 
        //AL FINAL QUE SE HIZO
        // primero se vio si hay una listasLibro,
        // despues se checo si en el primer valor de la lista se ecuentra y se salta al siguiente
        // despues se hizo un bucle de recorrido en donde se pretendia parar hasta que hubiera un null o que se encontrara un valor que se quiere eliminar

        if (this.head === null){
            console.log("Esta lista esta vacia");
            return
        }

        let current = this.head

    

    if(current.data === DataE ){
       current = current.next
        return
        
    }

    while(current.next !== null && current.next.data !== DataE){//El bucle es para que recorra los que no son iguales al valor hasta que lo encuentra se detiene
        current = current.next //
    }

    //si de esto 

if (current.next === null){
    console.log("No se encontro el valor mencionado");
}else{
    current.next = current.next.next
}
    
//Aqui que paso el current.next = current.next.next lo pude colocar justo despues del while pero tendria que
//poner que el valor no se menciono


    
}

reversee(){

    let   prev = null
    let current  =  this.head
    let next  = null


    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }


  contar(){
     
    let contar = 0
    let curretn = this.head


    while(curretn !== null){
        contar++
        curretn = curretn.next
    }
    return console.log(`la lista tiene ${contar} elementos`) 
        
    

  }
}
     


const node1 = new node(25);
const node2 = new node(23)
const node3 = new node(12);
const node4 = new node(45);
 const List = new linkedlist()

console.log(node1);


console.log(List.InsertarEnPosicion(node1,1));
console.log(List.InsertarEnPosicion(node2,2));
console.log(List.InsertarEnPosicion(node3,3));
console.log(List.InsertarEnPosicion(node4,4));

