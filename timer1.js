const args = process.argv.splice(2);
const sorted = args.sort();

for (time of sorted) {
  //console.log(time);
  if (time < 0 || isNaN(Number(time))) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
}
