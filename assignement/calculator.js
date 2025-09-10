// Basic demo behavior (eval is used here only for the classroom/local demo).
  // DO NOT eval untrusted input in production.
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
            // simple replace for display symbols (optional)
            // evaluate expression - demo only
            const result = Function('"use strict";return (' + expr + ')')();
            expr = String(result);
          } catch(e) { expr = 'Error'; }
          render();
          return;
        }
        // append normally (allow parentheses and operators)
        expr += v;
        render();
      });
    });

    // keyboard support (very basic)
    window.addEventListener('keydown', (ev) => {
      if(/[0-9()+\-*/.]/.test(ev.key)) { expr += ev.key; render(); }
      if(ev.key === 'Enter') { document.querySelector('.btn.equal').click(); }
      if(ev.key === 'Backspace') { expr = expr.slice(0,-1); render(); }
      if(ev.key.toLowerCase() === 'c') { expr=''; render(); }
    });
  })();