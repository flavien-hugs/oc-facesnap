import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { DatePipe, DecimalPipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-single-face-snap',
    imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, DecimalPipe, RouterLink],
    templateUrl: './single-face-snap.component.html',
    styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
    faceSnap!: FaceSnap;

    snapButtonText!: string;
    useHasSnapped!: boolean;

    constructor(private FaceSnapsService: FaceSnapsService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.prepareInterface();
        this.getFaceSnap();
    }

    onSnap(): void {
        if (this.useHasSnapped) {
            this.downSnap();
        } else {
            this.upSnap();
        }
    }

    downSnap(): void {
        this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        // this.FaceSnapsService.unsnapSnapFaceById(this.faceSnap.id);
        this.snapButtonText = 'Oh Snap !';
        this.useHasSnapped = false;
    }

    upSnap(): void {
        this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
        // this.FaceSnapsService.upsnapFaceSnapById(this.faceSnap.id);
        this.snapButtonText = 'Oops, unSnap !';
        this.useHasSnapped = true;
    }

    private prepareInterface(): void {
        this.snapButtonText = 'Oh Snap !';
        this.useHasSnapped = false;
    }

    private getFaceSnap(): void {
        const faceSnapId = this.route.snapshot.params['id'];
        this.faceSnap = this.FaceSnapsService.getFaceSnapById(faceSnapId);
    }
}
