import { AlertTriangle } from "lucide-react";

const CovidNotice = () => {
  return (
    <div className="bg-covid-bg border-l-4 border-covid-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex gap-3">
          <AlertTriangle className="w-5 h-5 text-covid-border flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-covid-text text-sm mb-1">COVID-19 Mededeling</p>
            <p className="text-covid-text/90 text-sm leading-relaxed">
              Vanaf dinsdag 1 september 2020 kunt u bij ons terecht voor reguliere zorg bij de
              huisarts en fysiotherapeuten. Er is geen inloopspreekuur. Behandeling volgens
              afspraak. Wij verzoeken u vriendelijk als u naar de praktijk komt om zoveel mogelijk
              alleen te komen en op de afgesproken tijd. Indien jonge kinderen, 1 ouder/verzorger
              mee. Zo houden we de wachttijd in onze wachtkamer zo kort mogelijk. U wordt verzocht
              bij klachten van de luchtwegen en koorts niet naar de praktijk te komen. Als de
              klachten ernstig zijn dan zal de doktersassistent aan de telefoon met u de ernst
              inschatten en passend hulp aanbieden. Als u (of één van uw huisgenoten) griepklachten
              heeft, verzoeken wij u uw afspraak met een arts of hulpverlener af te bellen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidNotice;
