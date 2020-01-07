import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export default class MediaService {
    private readonly audioPath: string = "/src/assets/media/audio"
    private readonly playlist: string[] = [
        'star-wars-theme-song.mp3',
    ]
    private actualPlaylistPos: number = 0;
    private actualSong: string; 

    ngOnInit(){
        this.play();
    }

    play(){
        this.actualSong = this.getCurrentSong();    
    }

    getCurrentSong(){
        return `${this.audioPath}/${this.playlist[this.actualPlaylistPos]}`
    }
}