console.log(0 || false || null || 'Guilherme Eduardo' || true);

const a = 0, b = null, c = 'false', d = false, e = NaN;

console.log(a || b || c || d || e);

switch(a) {
    case 0:
        console.log('Deu certo');
        break;
}