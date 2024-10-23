import { ModuleWithProviders, NgModule } from '@angular/core';
import { MathJAXDirective } from './math-jax.directive';
import { MathJAXService } from './math-jax.service';



@NgModule({
  declarations: [
    MathJAXDirective
  ],
  exports:[MathJAXDirective]
})
export class MathJAXModule {
  constructor(mathService: MathJAXService) {
    // see https://docs.mathjax.org/en/latest/advanced/dynamic.html
  
    this.loadJsFile().
    then(()=>{
      // load config
      this.loadConfig();
    }).
    catch((error)=>{
      console.log(error,'errrrrrrrrrrr')
    })

    
  }


  
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: MathJAXModule,
      providers: [{provide: MathJAXService, useClass: MathJAXService}]
    };
  }


  loadJsFile():Promise<any>{
    return new Promise((resolve, reject) => {
      const script = document.createElement('script') as HTMLScriptElement;
      script.type = 'text/javascript';
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML';
      script.integrity = 'sha256-nvJJv9wWKEm88qvoQl9ekL2J+k/RWIsaSScxxlsrv8k=';
      script.crossOrigin = 'anonymous';
      script.async = true;
      script.onload = ()=>resolve('');
      script.onerror = (error)=>reject(error);
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }
  loadConfig(){
    const config = document.createElement('script') as HTMLScriptElement;
    config.type = 'text/x-mathjax-config';
    config.text = `
    MathJax.Hub.Config({
      skipStartupTypeset: true,
      tex2jax: { 
        inlineMath: [["$", "$"]],
        displayMath:[["$$", "$$"]]
      },
      loader: {load: ['ui/lazy']},
      options: {
        lazyMargin: '200px',
        lazyAlwaysTypeset: null
      }
    });
      MathJax.Hub.Register.StartupHook('End', () => {
        window.hubReady.next();
        window.hubReady.complete();
      });
    `;
    document.getElementsByTagName('head')[0].appendChild(config);
  }

}
