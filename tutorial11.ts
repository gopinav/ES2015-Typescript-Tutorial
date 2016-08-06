var employee = {
    id: 1,
    greet: function(){
        
       setTimeout(() => {console.log(this.id)}, 1000) ;
    }
};
employee.greet();