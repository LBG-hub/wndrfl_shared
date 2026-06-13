# wndrfl Print Production Guide
**Version 2.0**

---

## Color Mode

All print production uses CMYK + Pantone spot color.

| Name | HEX | CMYK | Pantone |
|---|---|---|---|
| Warm Gray 2 | `#D3CCC2` | C17 M16 Y21 K0 | Warm Gray 2 C |
| Warm Gray 1 | `#DDD7CE` | C13 M12 Y16 K0 | Warm Gray 1 C |
| Cool Gray 1 | `#E5E1DF` | C9 M9 Y9 K0 | Cool Gray 1 C |
| Black | `#000000` | C0 M0 Y0 K100 | Black 6 C |

White is not a Pantone spec — use uncoated paper stock or white ink on dark stock.

Never use RGB values for print. Convert all digital assets to CMYK before sending to press.

---

## Source Files

All print-ready assets are in `WNDRFL_final_files/01_Identity/` under `CMYK/` subfolders:

- **AI files** — Illustrator source. Use for editing, scaling, or repurposing
- **PDF files** — Print-ready. Send directly to press without modification
- **EPS files** — Interchange format for placement in InDesign, Quark, or legacy workflows

Use CMYK sources for all print output. Never send RGB files to press.

---

## Logo Minimum Sizes (print)

| Asset | Minimum Size |
|---|---|
| Logotype | 0.5 × 1.84 cm |
| Symbol | 1.5 × 1.5 cm |
| Alternative compositions | 1.5 × 1.5 cm |

Below these sizes, fine details in the symbol and lockups will not hold on press.

---

## Paper and Substrate Guidance

**Preferred:** Uncoated natural white or warm-white stock. The brand's warm gray palette reads differently on coated vs. uncoated — always proof on the target stock.

**Uncoated:** Color appears softer, slightly warmer. Recommended for stationery, business cards, brand collateral.

**Coated:** Colors appear more saturated and cooler. Adjust CMYK values if needed to compensate — consult with printer for adjusted specs on coated stock.

**Avoid:** Bright white or blue-white coated stock — creates a cooler, corporate feel inconsistent with the brand.

---

## Stationery Specs

Located in `WNDRFL_final_files/05_Stationary/`:

| Item | Location | Formats |
|---|---|---|
| Business Card | `05_1_Buissiness_Card/` | Laser print + Screen printing variants |
| Letterhead | `05_2_Letterhead/` | Multiple formats |
| Folder | `05_3_Folder/` | |

Business cards have two production variants: laser print (standard digital press) and screen printing. Screen printing is preferred for quality. Verify bleed and crop marks are included before sending to press.

---

## Advertising Specs

Located in `WNDRFL_final_files/06_Graphic_Communicaciton/06_2_Advertising/`:

| Item | File | Format |
|---|---|---|
| Billboards (3 compositions) | `Wndrfl_Billboard_1–3.psd` + JPG | PSD source + JPG reference |
| Posters (2 compositions) | `Wndrfl_Poster_1–2.psd` + JPG | PSD source + JPG reference |

Billboard and poster PSDs require Photoshop to access layers and export print-resolution files. Confirm resolution (minimum 300dpi at final print size) before production.

---

## Handover Files

Master handover files consolidate all identity assets:
- `WNDRFL_final_files/11_Handover/CMYK/` — Complete CMYK set (AI + PDF)
- `WNDRFL_final_files/11_Handover/RGB/` — Complete RGB set (AI + PDF)

Note: `RGB/PDF/Wndrfl_Handover_RGB.ai` has an `.ai` extension but is in the PDF folder — this is a naming error in the source. The file is an Illustrator file.

---

## Brandbook Reference

Full visual specifications, usage examples, and production notes are in:
`WNDRFL_final_files/10_Brandbook/`

Two versions: Digital and Print. The print version includes bleed marks and print-specific notes.
