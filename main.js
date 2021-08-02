let hex = document.getElementById('hex')

function breath(node){
    function up(){
        anime({
            targets: node,
            translateY: -5,
            duration: 5000,
            easing: 'easeInOutQuad',
            boxShadow: 'rgba(255,255,255, .4) 0px 0px 50px 5px',
            complete: function(){
                down()
            }
        })
    }
    function down(){
        anime({
            targets: node,
            translateY: 0,
            duration: 5000,
            boxShadow: 'rgba(255,255,255, .4) 0px 0px 50px -5px',
            easing: 'easeInOutQuad',
            complete:function(){
                up()
            }
        })
    }
    up()
}

breath(hex)