import java.util.Scanner;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class JavaPostRequest {

    private static HttpURLConnection con;

    public static void main(String[] args) throws IOException {

        String url = "https://codetransfer.herokuapp.com/upload";
        
        String urlParameters = "code="+takeDataFromFile(args[0]);
        byte[] postData = urlParameters.getBytes(StandardCharsets.UTF_8);

        try {
            URL myurl = new URL(url);
            con = (HttpURLConnection) myurl.openConnection();
            con.setDoOutput(true);
            con.setRequestMethod("POST");
            con.setRequestProperty("User-Agent", "Java client");
            con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            try (DataOutputStream wr = new DataOutputStream(con.getOutputStream())) {
                wr.write(postData);
            }
            StringBuilder content;
            try (BufferedReader br = new BufferedReader(
                    new InputStreamReader(con.getInputStream()))) {
                String line;
                content = new StringBuilder();
                while ((line = br.readLine()) != null) {
                    content.append(line);
                    content.append(System.lineSeparator());
                }
            }
            System.out.print(content.toString());
        } finally {
            con.disconnect();
        }
    }

    public static String takeDataFromFile(String filename) {
        try{
            File file = new File(filename);
            Scanner dataFile = new Scanner(file);
            StringBuilder sb = new StringBuilder();
            while (dataFile.hasNext()) {
                sb.append(dataFile.nextLine());
                sb.append("\n");
            }
            dataFile.close();
            return sb.toString();
        } catch(Exception e) {
            System.out.println("error");
            return "";
        }
    }
}
