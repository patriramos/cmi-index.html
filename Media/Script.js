function Frame__0_1(ID){
StackTrace="Scene 1 Frame 1";
PlayLoop(1,25);


}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
PlayLoop(0,25);


}

function Iralsonido_OnClick(){
StackTrace="Ir al sonido.On Click";
SceneNext();
SoundPlay("miau",false);SoundSetVolume("miau",20);

}

function Sonidovídeo_OnClick(){
StackTrace="Sonido vídeo.On Click";
VideoSetVolume("vídeo",0);
SoundPlay("miau",false);SoundSetVolume("miau",20);


}

function Sonidovídeo_OnRelease(){
StackTrace="Sonido vídeo.On Release";
VideoSetVolume("vídeo",100);
SoundPlay("miau",false);SoundSetVolume("miau",20);


}

function pausarvídeo_OnClick(){
StackTrace="pausar vídeo.On Click";
VideoResume("vídeo");
SoundPlay("miau",false);SoundSetVolume("miau",20);

}

function pausarvídeo_OnRelease(){
StackTrace="pausar vídeo.On Release";
VideoPause("vídeo");
SoundPlay("miau",false);SoundSetVolume("miau",20);

}

function Iralvídeo_OnClick(){
StackTrace="Ir al vídeo.On Click";
ScenePrevious();
SoundPlay("miau",false);SoundSetVolume("miau",20);


}

function Músicafondo_OnClick(){
StackTrace="Música fondo.On Click";
SoundResume("fireflies");
SoundPlay("miau",false);SoundSetVolume("miau",20);

}

function Músicafondo_OnRelease(){
StackTrace="Música fondo.On Release";
SoundPause("fireflies");
SoundPlay("miau",false);SoundSetVolume("miau",20);

}

