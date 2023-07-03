#include <emscripten/emscripten.h>

#define RLAPI EMSCRIPTEN_KEEPALIVE
#define EASEDEF RLAPI
#define RAYGUIAPI RLAPI
#define RAYGUI_IMPLEMENTATION

#include "raylib.h"
#include "rlgl.h"
#include "raymath.h"
#include "raygui.h"


// These are really handy for wordwrap



// Draw text using font inside rectangle limits with support for text selection
RLAPI void DrawTextBoxedSelectable(Font font, const char *text, Rectangle rec, float fontSize, float spacing, bool wordWrap, Color tint, int selectStart, int selectLength, Color selectTint, Color selectBackTint)
{
    int length = TextLength(text);  // Total length in bytes of the text, scanned by codepoints in loop

    float textOffsetY = 0;          // Offset between lines (on line break '\n')
    float textOffsetX = 0.0f;       // Offset X to next character to draw

    float scaleFactor = fontSize/(float)font.baseSize;     // Character rectangle scaling factor

    // Word/character wrapping mechanism variables
    enum { MEASURE_STATE = 0, DRAW_STATE = 1 };
    int state = wordWrap? MEASURE_STATE : DRAW_STATE;

    int startLine = -1;         // Index where to begin drawing (where a line begins)
    int endLine = -1;           // Index where to stop drawing (where a line ends)
    int lastk = -1;             // Holds last value of the character position

    for (int i = 0, k = 0; i < length; i++, k++)
    {
        // Get next codepoint from byte string and glyph index in font
        int codepointByteCount = 0;
        int codepoint = GetCodepoint(&text[i], &codepointByteCount);
        int index = GetGlyphIndex(font, codepoint);

        // NOTE: Normally we exit the decoding sequence as soon as a bad byte is found (and return 0x3f)
        // but we need to draw all of the bad bytes using the '?' symbol moving one byte
        if (codepoint == 0x3f) codepointByteCount = 1;
        i += (codepointByteCount - 1);

        float glyphWidth = 0;
        if (codepoint != '\n')
        {
            glyphWidth = (font.glyphs[index].advanceX == 0) ? font.recs[index].width*scaleFactor : font.glyphs[index].advanceX*scaleFactor;

            if (i + 1 < length) glyphWidth = glyphWidth + spacing;
        }

        // NOTE: When wordWrap is ON we first measure how much of the text we can draw before going outside of the rec container
        // We store this info in startLine and endLine, then we change states, draw the text between those two variables
        // and change states again and again recursively until the end of the text (or until we get outside of the container).
        // When wordWrap is OFF we don't need the measure state so we go to the drawing state immediately
        // and begin drawing on the next line before we can get outside the container.
        if (state == MEASURE_STATE)
        {
            // TODO: There are multiple types of spaces in UNICODE, maybe it's a good idea to add support for more
            // Ref: http://jkorpela.fi/chars/spaces.html
            if ((codepoint == ' ') || (codepoint == '\t') || (codepoint == '\n')) endLine = i;

            if ((textOffsetX + glyphWidth) > rec.width)
            {
                endLine = (endLine < 1)? i : endLine;
                if (i == endLine) endLine -= codepointByteCount;
                if ((startLine + codepointByteCount) == endLine) endLine = (i - codepointByteCount);

                state = !state;
            }
            else if ((i + 1) == length)
            {
                endLine = i;
                state = !state;
            }
            else if (codepoint == '\n') state = !state;

            if (state == DRAW_STATE)
            {
                textOffsetX = 0;
                i = startLine;
                glyphWidth = 0;

                // Save character position when we switch states
                int tmp = lastk;
                lastk = k - 1;
                k = tmp;
            }
        }
        else
        {
            if (codepoint == '\n')
            {
                if (!wordWrap)
                {
                    textOffsetY += (font.baseSize + font.baseSize/2)*scaleFactor;
                    textOffsetX = 0;
                }
            }
            else
            {
                if (!wordWrap && ((textOffsetX + glyphWidth) > rec.width))
                {
                    textOffsetY += (font.baseSize + font.baseSize/2)*scaleFactor;
                    textOffsetX = 0;
                }

                // When text overflows rectangle height limit, just stop drawing
                if ((textOffsetY + font.baseSize*scaleFactor) > rec.height) break;

                // Draw selection background
                bool isGlyphSelected = false;
                if ((selectStart >= 0) && (k >= selectStart) && (k < (selectStart + selectLength)))
                {
                    DrawRectangleRec((Rectangle){ rec.x + textOffsetX - 1, rec.y + textOffsetY, glyphWidth, (float)font.baseSize*scaleFactor }, selectBackTint);
                    isGlyphSelected = true;
                }

                // Draw current character glyph
                if ((codepoint != ' ') && (codepoint != '\t'))
                {
                    DrawTextCodepoint(font, codepoint, (Vector2){ rec.x + textOffsetX, rec.y + textOffsetY }, fontSize, isGlyphSelected? selectTint : tint);
                }
            }

            if (wordWrap && (i == endLine))
            {
                textOffsetY += (font.baseSize + font.baseSize/2)*scaleFactor;
                textOffsetX = 0;
                startLine = endLine;
                endLine = -1;
                glyphWidth = 0;
                selectStart += lastk - k;
                k = lastk;

                state = !state;
            }
        }

        if ((textOffsetX != 0) || (codepoint != ' ')) textOffsetX += glyphWidth;  // avoid leading spaces
    }
}

// Draw text using font inside rectangle limits
RLAPI void DrawTextBoxed(Font font, const char *text, Rectangle rec, float fontSize, float spacing, bool wordWrap, Color tint)
{
    DrawTextBoxedSelectable(font, text, rec, fontSize, spacing, wordWrap, tint, 0, 0, WHITE, WHITE);
}



// I was having trouble with reasings.h

// Linear Easing functions
EASEDEF float EaseLinearNone(float t, float b, float c, float d) { return (c*t/d + b); }                            // Ease: Linear
EASEDEF float EaseLinearIn(float t, float b, float c, float d) { return (c*t/d + b); }                              // Ease: Linear In
EASEDEF float EaseLinearOut(float t, float b, float c, float d) { return (c*t/d + b); }                             // Ease: Linear Out
EASEDEF float EaseLinearInOut(float t, float b, float c, float d) { return (c*t/d + b); }                           // Ease: Linear In Out

// Sine Easing functions
EASEDEF float EaseSineIn(float t, float b, float c, float d) { return (-c*cosf(t/d*(PI/2.0f)) + c + b); }            // Ease: Sine In
EASEDEF float EaseSineOut(float t, float b, float c, float d) { return (c*sinf(t/d*(PI/2.0f)) + b); }                // Ease: Sine Out
EASEDEF float EaseSineInOut(float t, float b, float c, float d) { return (-c/2.0f*(cosf(PI*t/d) - 1.0f) + b); }      // Ease: Sine In Out

// Circular Easing functions
EASEDEF float EaseCircIn(float t, float b, float c, float d) { t /= d; return (-c*(sqrtf(1.0f - t*t) - 1.0f) + b); } // Ease: Circular In
EASEDEF float EaseCircOut(float t, float b, float c, float d) { t = t/d - 1.0f; return (c*sqrtf(1.0f - t*t) + b); }  // Ease: Circular Out
EASEDEF float EaseCircInOut(float t, float b, float c, float d)                                                      // Ease: Circular In Out
{
    if ((t/=d/2.0f) < 1.0f) return (-c/2.0f*(sqrtf(1.0f - t*t) - 1.0f) + b);
    t -= 2.0f; return (c/2.0f*(sqrtf(1.0f - t*t) + 1.0f) + b);
}

// Cubic Easing functions
EASEDEF float EaseCubicIn(float t, float b, float c, float d) { t /= d; return (c*t*t*t + b); }                      // Ease: Cubic In
EASEDEF float EaseCubicOut(float t, float b, float c, float d) { t = t/d - 1.0f; return (c*(t*t*t + 1.0f) + b); }    // Ease: Cubic Out
EASEDEF float EaseCubicInOut(float t, float b, float c, float d)                                                     // Ease: Cubic In Out
{
    if ((t/=d/2.0f) < 1.0f) return (c/2.0f*t*t*t + b);
    t -= 2.0f; return (c/2.0f*(t*t*t + 2.0f) + b);
}

// Quadratic Easing functions
EASEDEF float EaseQuadIn(float t, float b, float c, float d) { t /= d; return (c*t*t + b); }                         // Ease: Quadratic In
EASEDEF float EaseQuadOut(float t, float b, float c, float d) { t /= d; return (-c*t*(t - 2.0f) + b); }              // Ease: Quadratic Out
EASEDEF float EaseQuadInOut(float t, float b, float c, float d)                                                      // Ease: Quadratic In Out
{
    if ((t/=d/2) < 1) return (((c/2)*(t*t)) + b);
    return (-c/2.0f*(((t - 1.0f)*(t - 3.0f)) - 1.0f) + b);
}

// Exponential Easing functions
EASEDEF float EaseExpoIn(float t, float b, float c, float d) { return (t == 0.0f) ? b : (c*powf(2.0f, 10.0f*(t/d - 1.0f)) + b); }       // Ease: Exponential In
EASEDEF float EaseExpoOut(float t, float b, float c, float d) { return (t == d) ? (b + c) : (c*(-powf(2.0f, -10.0f*t/d) + 1.0f) + b); } // Ease: Exponential Out
EASEDEF float EaseExpoInOut(float t, float b, float c, float d)                                                                         // Ease: Exponential In Out
{
    if (t == 0.0f) return b;
    if (t == d) return (b + c);
    if ((t/=d/2.0f) < 1.0f) return (c/2.0f*powf(2.0f, 10.0f*(t - 1.0f)) + b);

    return (c/2.0f*(-powf(2.0f, -10.0f*(t - 1.0f)) + 2.0f) + b);
}

// Back Easing functions
EASEDEF float EaseBackIn(float t, float b, float c, float d) // Ease: Back In
{
    float s = 1.70158f;
    float postFix = t/=d;
    return (c*(postFix)*t*((s + 1.0f)*t - s) + b);
}

EASEDEF float EaseBackOut(float t, float b, float c, float d) // Ease: Back Out
{
    float s = 1.70158f;
    t = t/d - 1.0f;
    return (c*(t*t*((s + 1.0f)*t + s) + 1.0f) + b);
}

EASEDEF float EaseBackInOut(float t, float b, float c, float d) // Ease: Back In Out
{
    float s = 1.70158f;
    if ((t/=d/2.0f) < 1.0f)
    {
        s *= 1.525f;
        return (c/2.0f*(t*t*((s + 1.0f)*t - s)) + b);
    }

    float postFix = t-=2.0f;
    s *= 1.525f;
    return (c/2.0f*((postFix)*t*((s + 1.0f)*t + s) + 2.0f) + b);
}

// Bounce Easing functions
EASEDEF float EaseBounceOut(float t, float b, float c, float d) // Ease: Bounce Out
{
    if ((t/=d) < (1.0f/2.75f))
    {
        return (c*(7.5625f*t*t) + b);
    }
    else if (t < (2.0f/2.75f))
    {
        float postFix = t-=(1.5f/2.75f);
        return (c*(7.5625f*(postFix)*t + 0.75f) + b);
    }
    else if (t < (2.5/2.75))
    {
        float postFix = t-=(2.25f/2.75f);
        return (c*(7.5625f*(postFix)*t + 0.9375f) + b);
    }
    else
    {
        float postFix = t-=(2.625f/2.75f);
        return (c*(7.5625f*(postFix)*t + 0.984375f) + b);
    }
}

EASEDEF float EaseBounceIn(float t, float b, float c, float d) { return (c - EaseBounceOut(d - t, 0.0f, c, d) + b); } // Ease: Bounce In
EASEDEF float EaseBounceInOut(float t, float b, float c, float d) // Ease: Bounce In Out
{
    if (t < d/2.0f) return (EaseBounceIn(t*2.0f, 0.0f, c, d)*0.5f + b);
    else return (EaseBounceOut(t*2.0f - d, 0.0f, c, d)*0.5f + c*0.5f + b);
}

// Elastic Easing functions
EASEDEF float EaseElasticIn(float t, float b, float c, float d) // Ease: Elastic In
{
    if (t == 0.0f) return b;
    if ((t/=d) == 1.0f) return (b + c);

    float p = d*0.3f;
    float a = c;
    float s = p/4.0f;
    float postFix = a*powf(2.0f, 10.0f*(t-=1.0f));

    return (-(postFix*sinf((t*d-s)*(2.0f*PI)/p )) + b);
}

EASEDEF float EaseElasticOut(float t, float b, float c, float d) // Ease: Elastic Out
{
    if (t == 0.0f) return b;
    if ((t/=d) == 1.0f) return (b + c);

    float p = d*0.3f;
    float a = c;
    float s = p/4.0f;

    return (a*powf(2.0f,-10.0f*t)*sinf((t*d-s)*(2.0f*PI)/p) + c + b);
}

EASEDEF float EaseElasticInOut(float t, float b, float c, float d) // Ease: Elastic In Out
{
    if (t == 0.0f) return b;
    if ((t/=d/2.0f) == 2.0f) return (b + c);

    float p = d*(0.3f*1.5f);
    float a = c;
    float s = p/4.0f;

    if (t < 1.0f)
    {
        float postFix = a*powf(2.0f, 10.0f*(t-=1.0f));
        return -0.5f*(postFix*sinf((t*d-s)*(2.0f*PI)/p)) + b;
    }

    float postFix = a*powf(2.0f, -10.0f*(t-=1.0f));

    return (postFix*sinf((t*d-s)*(2.0f*PI)/p)*0.5f + c + b);
}
