(function(){
    const display = document.getElementById('display');
    let expr = '';

    function render(){
      display.textContent = expr || '0';
    }

    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.dataset.value;
        if(v === 'C'){ expr = ''; render(); return; }
        if(v === '='){
          try {
            
            const result = Function('"use strict";return (' + expr + ')')();
            expr = String(result);
          } catch(e) { expr = 'Error'; }
          render();
          return;
        }
        expr += v;
        render();
      });
    });

    
    window.addEventListener('keydown', (ev) => {
      if(/[0-9()+\-*/.]/.test(ev.key)) { expr += ev.key; render(); }
      if(ev.key === 'Enter') { document.querySelector('.btn.equal').click(); }
      if(ev.key === 'Backspace') { expr = expr.slice(0,-1); render(); }
      if(ev.key.toLowerCase() === 'c') { expr=''; render(); }
    });
  })();
