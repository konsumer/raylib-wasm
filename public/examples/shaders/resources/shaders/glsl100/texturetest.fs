#version 100

precision mediump float;

// Input vertex attributes (from vertex shader)
varying vec2 fragTexCoord;
varying vec4 fragColor;

// NOTE: Add here your custom variables
uniform sampler2D texture1;

void main()
{

    vec4 color = texture2D(texture1, vec2(gl_FragCoord.x/800.0, gl_FragCoord.y/450.0));
    gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
}