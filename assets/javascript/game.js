 // VARIABLES==========================================================

    var words = [
        "wand",
        "Harry",
        "hogwarts",
        "butterbeer",
        "muggle"
        ];
 
    var game = {
      guessed: []
      left: 13,
      start: function() {
        this.complete = false;
        this.word = words[Math.floor(Math.random()*words.length)];
        this.right = document.getElementById('right');
        this.wrong = document.getElementById('wrong');
        this.remain = document.getElementById('remain');
        this.right.innerHTML = '_'.repeat(this.word.length);
      },
      guess: function(letter) {
        if (this.left > 0 && this.complete != true) {
          if(this.word.indexOf(letter) > -1 || this.guessed.indexof(letter) > -1) {
            this.right(letter);
          } else {
            this.wrong(letter;)
          }
        }
      },
      right: function(Letter) {
        for(var i = 0; i < this.word.length; i++) {
          if (this.word[i] == letter) {
            var word = this.right.innerHTML.split('');
            word[i]= letter;
            this.right.innerHTML = word.join('');
          }
        }
        if (this.right.innerHTML.indexOf('') < 0) {
          alert('You Win!');
          this.complete = true;
        }
      }
    }

  