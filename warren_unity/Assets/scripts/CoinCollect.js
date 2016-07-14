
function OnTriggerEnter (info : Collider) {
    Destroy (gameObject)   ;
    CoinGather.coinscollect +=1;
}