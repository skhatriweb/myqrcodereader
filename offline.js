function detectOffline(){
    //navigator property onLine//
    if(navigator.onLine){

        document.documentElement.style.backgroundColor ="orange"

    }else{
        
        document.documentElement.style.backgroundColor = "silver"
    }
}
//window events//
window.addEventListener('load',detectOffline);
window.addEventListener('online',detectOffline);
window.addEventListener('offline',detectOffline);