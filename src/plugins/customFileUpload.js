import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import attachmentIcon from '../assets/icons/attachment.svg';

export default class CustomFileUpload extends Plugin {
  init() {
    console.log('CustomFileUpload init');
    const editor = this.editor;
    const options = this.editor.config.get( 'customFileUpload' );

    editor.ui.componentFactory.add( 'customFileUpload', locale => {
      const view = new ButtonView( locale );

      view.set({
        label: 'Attach file',
        icon: attachmentIcon,
        tooltip: true
      });

      // Callback executed once the image is clicked.
      view.on('execute', options.execute );

      return view;
    });
  }
}