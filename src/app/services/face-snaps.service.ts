import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { SnapType } from '../models/snap-type.type';

@Injectable({
    providedIn: 'root', // spécifie que le service est disponible dans toute l'application (ie à la racine de l'application
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
            'Archibald',
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            'Mon meilleur ami depuis toujours !',
            new Date(),
            255
        ),

        new FaceSnap(
            'Three Rock Mountain',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            'Un endroit magnifique pour les randonnées.',
            new Date(),
            473
        ).withLocation('Dublin, Ireland'),

        new FaceSnap(
            'The best view on Earth',
            'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            'Mon meilleur ami depuis toujours !',
            new Date(),
            122422.47
        ),
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    getFaceSnapById(faceSnapId: any): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
            throw new Error('FaceSnap not found !');
        }
        return foundFaceSnap;
    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(snapType);
    }

    upsnapFaceSnapById(faceSnapId: string): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.addSnap();
    }

    unsnapSnapFaceById(faceSnapId: string): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.removeSnap();
    }
}
