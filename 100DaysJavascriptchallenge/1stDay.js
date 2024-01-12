let str = "This is My 1st Day";

      // CharCodeAt()
      console.log(str.charCodeAt(3, 5));

      // At()
      console.log(str.at(3));

      //   slice()
      console.log(str.slice(3, 8));

      // substring()
      console.log(str.substring(5, 9));

      //   substr()
      console.log(str.substr(3, 6));

      // concat()
      console.log(str.concat(" Nitin"));

      //  trim()
      let trimvar = "         Nitin          ";
      console.log(trimvar.trim());
      console.log(trimvar.trimStart());
      console.log(trimvar.trimEnd());   

      // repeat()
      console.log(str.repeat(3));

      // split()
      let split = "Hello-Nitin";
      console.log(split.split("-"));

      // replaceAll()
      console.log(str.replace("My", "Javacript learning"));

      // CharAt()
      console.log(str.charAt(2));

      // Startwith()
      console.log(str.startsWith("This"));

      // Match()
      let match = /[A-Z]/;
      console.log(str.match(match));

      //   tolocalUppercase
      console.log(str.toLocaleUpperCase());

      //   tolocalLowercase
      console.log(str.toLocaleLowerCase());