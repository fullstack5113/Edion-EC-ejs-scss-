import { isSp } from './sp';

export function print() {
    ////////////////////////////////////
	//  Print function
	////////////////////////////////////
	var printRecept = (function($){
        var noPrintings = ['#header', '#flow-wrap', '.receiptregister-done-ft', '#footer' , '.back-btn'];
    
        // 印刷設定から除外する
        function before(){
          for (var i = 0; i < noPrintings.length; i++) {
            if (!$(noPrintings[i]).hasClass('noprint')) {
              $(noPrintings[i]).addClass('noprint');
            }
          }
        }
    
        // before()で設定した内容を戻す
        function after(){
          for (var i = 0; i < noPrintings.length; i++) {
            $(noPrintings[i]).removeClass('noprint');
          }
        }
    
        return {
          showPreview: function(){
            before();
    
            window.print();
    
            after();
          }
        };
      })(jQuery);
    
      // 印刷する押下時の処理
      $('.btn-wrap-print').on("click", function(){
        printRecept.showPreview();
        return false;
      });
}
