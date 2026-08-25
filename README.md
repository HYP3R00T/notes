<!-- rumdl-disable MD041 -->

<div align="center">

# Notes

Working notes on mathematics, physics, computer science, and the ideas that connect them.

[![Quality Gate](https://img.shields.io/github/actions/workflow/status/HYP3R00T/notes/ci.yaml?branch=main&style=for-the-badge&label=Quality%20Gate&logo=githubactions)](https://github.com/HYP3R00T/notes/actions/workflows/ci.yaml)
[![License: MIT](https://img.shields.io/github/license/HYP3R00T/notes?style=for-the-badge&label=License)](LICENSE)

</div>

The notes are written in MDX and published as a small Astro learning library. Mathematical notation, code examples, and source attribution are supported without adding friction to the writing process.

## Development

```bash
# Start local dev server
mise run dev
```

## Writing

Each folder in [`content`](content) is a module. Its `index.mdx` defines module metadata, while numerically prefixed MDX files define the ordered notes:

```text
content/
  classical-mechanics/
    index.mdx
    010-vectors.mdx
    020-kinematics.mdx
```

Module pages use the folder name as their slug. Individual notes receive flat URLs with their numeric ordering prefix removed.

Visit [notes.hyperoot.dev](https://notes.hyperoot.dev) to read the published notes.

## License

This project is available under the [MIT License](LICENSE).

<div align="center">

Developed with ❤️ by [HYP3R00T](https://github.com/HYP3R00T)

</div>
