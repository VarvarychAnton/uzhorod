window.addEventListener('load', function() {
      document.querySelector('.link-comfort').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#comfort').scrollIntoView({ behavior: 'smooth' });
      });
    document.querySelector('.link-about').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
      });
    document.querySelector('.link-contacts').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contacts').scrollIntoView({ behavior: 'smooth' });
      });
    document.querySelector('.link-company').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#company').scrollIntoView({ behavior: 'smooth' });
      });
    document.querySelector('.link-place').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#place').scrollIntoView({ behavior: 'smooth' });
      });
    document.querySelector('.link-select-room').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#select-room').scrollIntoView({ behavior: 'smooth' });
      });
    document.querySelector('.link-select-office').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#select-office').scrollIntoView({ behavior: 'smooth' });
      });
    document.querySelector('.link-news').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#news').scrollIntoView({ behavior: 'smooth' });
      });
    });