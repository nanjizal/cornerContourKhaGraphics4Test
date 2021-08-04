#version 450
in vec3 pos;
in vec4 col;
out vec4 fragmentColor;
void main() {
    gl_Position = vec4(pos, 1.0);
    fragmentColor = col;
}