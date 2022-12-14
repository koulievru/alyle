import { NgModule } from '@angular/core';
import { LyOverlayBackdrop } from './overlay-backdrop';
import { LyOverlay } from './overlay';

@NgModule({
    declarations: [LyOverlayBackdrop],
    providers: [
        LyOverlay
    ]
})
export class LyOverlayModule { }
