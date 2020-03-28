let options = {
  title: 'Заголовок окна',
  closable: true,
  content: `
    <p>Текст содержимого в формате HTML</p>
  `,
  width: '600px',
  footerButtons: [
    {text: 'OK', type: 'primary', handler(){
      console.log('Primary btn clicked!');
      modal.close();
    }},
    {text: 'Cancel', type: 'danger', handler(){
      console.log('Danger btn clicked!')
      modal.close();
    }},
  ]
};

const modal = $.modal(options);
