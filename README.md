# My First Real Quantum Computing Project

A beginner-friendly project for learning how classical software can submit quantum circuits to quantum hardware, with Shor's algorithm as the motivating example.

## What this repo contains

The first milestone is a lightweight educational website that can be hosted directly with GitHub Pages.

It explains the flow:

```text
Browser
  -> Web app
  -> Python / Qiskit service (next milestone)
  -> Quantum provider
  -> QPU
  -> Measurement results
  -> Classical post-processing
  -> Factors
```

The current interactive factorization demo runs locally in the browser and is intentionally classical. It is there to explain the product experience before we connect a real Qiskit backend.

## Milestones

- [x] Educational website shell
- [x] Interactive factorization walkthrough
- [ ] Python + Qiskit simulator backend
- [ ] FastAPI connection from website to Qiskit
- [ ] Optional real-QPU execution
- [ ] Circuit and measurement visualization

## Run locally

Because this first version is static, you can simply open `index.html` in a browser.

For a local web server, from the repository folder run:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Important limitation

This project is for learning and tiny demonstrations. Present-day quantum computers are not capable of factoring modern RSA keys with Shor's algorithm at cryptographically useful scale.

## Future stack

- Frontend: current static prototype, later React / Next.js if useful
- API: Python + FastAPI
- Quantum SDK: Qiskit
- Hardware path: IBM Quantum-compatible backend

Created by [Shimon Navon](https://github.com/ShimonNavon).
